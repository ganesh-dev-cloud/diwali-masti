# Diwali visual assets

This directory is the target location for the separated assets from the user-provided
"Diwali Celebration Asset Sheet-3.png" reference.

Expected files:
- velvet-curtain.png
- ornate-gold-photo-frame.png
- firework-gold.png
- fireworks-colorful.png
- sunset.png
- hanuman-silhouette.png
- gada.png
- green-hanging-firecracker.png
- city-skyline.png
- marigold-toran.png
- festive-string-lights.png
- golden-particles.png
- golden-sparkles.png
- golden-leaf-branch.png

The source sheet contains a visible checkerboard pattern in its RGB pixels. Do not
assume the checkerboard is transparency. Before committing the raster files, remove
the checkerboard carefully and verify the alpha channel, especially inside the
ornate photo frame and around fine fireworks/leaf details.

Integration should reference these files from index.html using relative paths under
assets/diwali/. Keep the assets as separate elements so their positions and animation
remain responsive and independently controllable.

Note: this README is an integration manifest; the binary PNG files have not yet been
uploaded in this commit.
