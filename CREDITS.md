# GazeDrive Asset & License Credits

This document lists all active assets, download sources, file locations, and licenses in GazeDrive.

---

## 1. Downloaded CC0 Assets (Organized in Project)

All textures and HDRI environments below are **100% Free CC0 Public Domain** assets, downloaded, organized, and running locally in `/public/assets/`.

| File Path | Asset Name | Source / Author | License |
| :--- | :--- | :--- | :--- |
| `public/assets/hdri/city_sky.hdr` | **Shanghai Bund (1K HDR)** | [Poly Haven](https://polyhaven.com/a/shanghai_bund) | [CC0 Public Domain](https://creativecommons.org/publicdomain/zero/1.0/) |
| `public/assets/textures/asphalt_color.jpg`<br/>`public/assets/textures/asphalt_normal.jpg`<br/>`public/assets/textures/asphalt_roughness.jpg` | **Asphalt 012 (1K PBR)** | [ambientCG](https://ambientcg.com/view?id=Asphalt012) (Lennart Demes) | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) |
| `public/assets/textures/concrete_color.jpg`<br/>`public/assets/textures/concrete_normal.jpg`<br/>`public/assets/textures/concrete_roughness.jpg` | **Concrete 034 (1K PBR)** | [ambientCG](https://ambientcg.com/view?id=Concrete034) (Lennart Demes) | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) |
| `public/assets/textures/plaster_color.jpg`<br/>`public/assets/textures/plaster_normal.jpg`<br/>`public/assets/textures/plaster_roughness.jpg` | **Plaster 001 (1K PBR)** | [ambientCG](https://ambientcg.com/view?id=Plaster001) (Lennart Demes) | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) |
| `public/assets/textures/paving_color.jpg`<br/>`public/assets/textures/paving_normal.jpg`<br/>`public/assets/textures/paving_roughness.jpg` | **Paving Stones 092 (1K PBR)** | [ambientCG](https://ambientcg.com/view?id=PavingStones092) (Lennart Demes) | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) |
| `public/assets/textures/bricks_color.jpg`<br/>`public/assets/textures/bricks_normal.jpg`<br/>`public/assets/textures/bricks_roughness.jpg` | **Bricks 059 (1K PBR)** | [ambientCG](https://ambientcg.com/view?id=Bricks059) (Lennart Demes) | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) |

---

## 2. Recommended 3D Models (No Login Needed)

When you wish to provide custom 3D models for vehicles and foliage, save `.glb` / `.gltf` files directly to `public/assets/models/` using these exact filenames:

| Expected Filename | Description | Recommended Free / No-Login Sources |
| :--- | :--- | :--- |
| `public/assets/models/auto_rickshaw.glb` | Indian 3-wheeler Auto-Rickshaw | [OpenGameArt.org](https://opengameart.org) (Search: Auto Rickshaw / Tuk Tuk)<br/>[Quaternius Urban Pack](https://quaternius.com) (CC0) |
| `public/assets/models/indian_bus.glb` | City Transit / Public Bus | [Kenney.nl Car & Bus Kit](https://kenney.nl/assets/car-kit) (CC0)<br/>[Quaternius City Vehicles](https://quaternius.com) (CC0) |
| `public/assets/models/scooter.glb` | Commuter Scooter / 2-Wheeler | [Kenney.nl](https://kenney.nl) or [OpenGameArt](https://opengameart.org) (CC0) |
| `public/assets/models/people.glb` | Low-poly Pedestrians | [Quaternius Animated People](https://quaternius.com) (CC0) |
| `public/assets/models/roadside_tree.glb` | Urban Shade Tree | [Poly Haven Models (Trees)](https://polyhaven.com/models/nature/trees) (CC0) |

> **Autonomous Fallback**: If any of these `.glb` files are absent, GazeDrive's procedural generator automatically builds and renders the 3D auto-rickshaw, bus, scooter, and street foliage using native Three.js geometry.

---

## 3. Procedural Assets (Generated Dynamically)
* **Bilingual Indian Shop Signboards**: Procedurally drawn to HTML5 2D Canvas ("SHARMA MEDICALS & SURGICALS", "ROYAL TEXTILES & SILK SAREES", "ANNAPURNA VEG RESTAURANT", "DELUXE BAKERY", etc.).
* **Hazy Metropolitan Skyline**: Canvas-synthesized skyline silhouette with communication towers and high-rise facades.
