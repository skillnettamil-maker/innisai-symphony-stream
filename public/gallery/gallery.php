<?php
// Lightweight gallery endpoint: scans predefined folders and returns image filenames as JSON.
// No database, no admin panel. Upload images into the folders below via File Manager.

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$folders = ['rj-stars', 'rj-voices', 'rj-special'];
$allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];
$base = __DIR__;
$result = [];

foreach ($folders as $folder) {
    $dir = $base . DIRECTORY_SEPARATOR . $folder;
    $files = [];

    if (is_dir($dir)) {
        foreach (scandir($dir) as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            if (!is_file($dir . DIRECTORY_SEPARATOR . $file)) {
                continue;
            }
            $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            if (in_array($ext, $allowed, true)) {
                $files[] = $file;
            }
        }
        natcasesort($files);
        $files = array_values($files);
    }

    $result[$folder] = array_map(
        static fn ($file) => '/gallery/' . $folder . '/' . rawurlencode($file),
        $files
    );
}

echo json_encode($result, JSON_UNESCAPED_SLASHES);
