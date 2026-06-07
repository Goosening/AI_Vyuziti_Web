# Batch convert PNG screenshots to WebP
# Usage: run in project root PowerShell: .\scripts\convert-images.ps1

$srcDir = "images/screenshots"
if (-not (Test-Path $srcDir)) {
    Write-Error "Source directory '$srcDir' not found."
    exit 1
}

# prefer cwebp if available
$cwebp = Get-Command cwebp -ErrorAction SilentlyContinue
$magick = Get-Command magick -ErrorAction SilentlyContinue

Get-ChildItem -Path $srcDir -Filter "*.png" | ForEach-Object {
    $png = $_.FullName
    $webp = [System.IO.Path]::ChangeExtension($png, ".webp")

    if ($cwebp) {
        Write-Output "Converting $($_.Name) -> $(Split-Path $webp -Leaf) using cwebp"
        & cwebp -q 80 "$png" -o "$webp"
    } elseif ($magick) {
        Write-Output "Converting $($_.Name) -> $(Split-Path $webp -Leaf) using ImageMagick"
        & magick convert "$png" -quality 80 "$webp"
    } else {
        Write-Error "Neither 'cwebp' nor 'magick' found in PATH. Install ImageMagick or libwebp tools and retry."
        exit 2
    }
}

Write-Output "Conversion complete. Verify generated .webp files in $srcDir"