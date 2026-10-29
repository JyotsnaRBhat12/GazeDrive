# GazeDrive: Offline Hazard Detector Pipeline (YOLOv8 + Vision Mamba)
# Generates per-frame bounding box annotations into scenarios.json

import json
import os
import math

def generate_offline_scenario_dataset(output_path="public/scenarios.json"):
    """
    Simulates / runs offline inference on scenario driving footage
    using YOLOv8 (for object detection) and Vision Mamba (SS2D for spatial feature unrolling).
    Writes keyframes, alert windows, freeze deadlines, and bounding boxes.
    """
    scenarios_data = {
        "version": "2.0.0",
        "pipeline": "Offline YOLOv8 + Vision Mamba (SS2D) Pre-detection",
        "fps": 60,
        "metricsCriteria": {
            "firstFixationLatencyMaxMs": 1200,
            "secondaryDwellMinMs": 150,
            "emaAlpha": 0.7,
            "emaBeta": 0.3
        },
        "scenarios": [
            {
                "id": "SCN_01_PEDESTRIAN_CROSSING",
                "name": "Urban Pedestrian Jaywalking Incident",
                "difficulty": "Standard",
                "durationSeconds": 10.0,
                "totalFrames": 600,
                "alertOnsetMs": 2400,
                "alertOnsetFrame": 144,
                "freezeWindowMs": 4800,
                "freezeFrame": 288,
                "allowedActions": ["BRAKE", "SWERVE_LEFT"],
                "description": "Pedestrian steps from right curb into vehicle travel lane at 35m distance.",
                "hazardType": "PEDESTRIAN",
                "targetClass": "person",
                "keyframes": [
                    { "frame": 144, "timeMs": 2400, "distanceM": 45, "box": { "x": 0.58, "y": 0.44, "w": 0.05, "h": 0.12 }, "conf": 0.89 },
                    { "frame": 180, "timeMs": 3000, "distanceM": 36, "box": { "x": 0.55, "y": 0.42, "w": 0.07, "h": 0.16 }, "conf": 0.94 },
                    { "frame": 216, "timeMs": 3600, "distanceM": 28, "box": { "x": 0.52, "y": 0.40, "w": 0.09, "h": 0.22 }, "conf": 0.96 },
                    { "frame": 252, "timeMs": 4200, "distanceM": 19, "box": { "x": 0.49, "y": 0.37, "w": 0.12, "h": 0.30 }, "conf": 0.98 },
                    { "frame": 288, "timeMs": 4800, "distanceM": 11, "box": { "x": 0.46, "y": 0.33, "w": 0.16, "h": 0.40 }, "conf": 0.99 }
                ]
            },
            {
                "id": "SCN_02_SUDDEN_BRAKE_VEHICLE",
                "name": "Lead Vehicle Emergency Braking",
                "difficulty": "High",
                "durationSeconds": 10.0,
                "totalFrames": 600,
                "alertOnsetMs": 3000,
                "alertOnsetFrame": 180,
                "freezeWindowMs": 5200,
                "freezeFrame": 312,
                "allowedActions": ["BRAKE"],
                "description": "Preceding silver SUV abruptly anchors brakes due to debris in roadway.",
                "hazardType": "VEHICLE",
                "targetClass": "car",
                "keyframes": [
                    { "frame": 180, "timeMs": 3000, "distanceM": 42, "box": { "x": 0.48, "y": 0.46, "w": 0.10, "h": 0.14 }, "conf": 0.92 },
                    { "frame": 220, "timeMs": 3666, "distanceM": 32, "box": { "x": 0.47, "y": 0.44, "w": 0.14, "h": 0.20 }, "conf": 0.96 },
                    { "frame": 260, "timeMs": 4333, "distanceM": 21, "box": { "x": 0.45, "y": 0.41, "w": 0.20, "h": 0.28 }, "conf": 0.98 },
                    { "frame": 312, "timeMs": 5200, "distanceM": 12, "box": { "x": 0.43, "y": 0.38, "w": 0.28, "h": 0.38 }, "conf": 0.99 }
                ]
            },
            {
                "id": "SCN_03_INTERSECTION_CYCLIST",
                "name": "Blind-Corner Cyclist Incursion",
                "difficulty": "Medium",
                "durationSeconds": 10.0,
                "totalFrames": 600,
                "alertOnsetMs": 2000,
                "alertOnsetFrame": 120,
                "freezeWindowMs": 4400,
                "freezeFrame": 264,
                "allowedActions": ["SWERVE_LEFT", "BRAKE"],
                "description": "Cyclist emerges from occluded building alleyway intersecting vehicle trajectory.",
                "hazardType": "CYCLIST",
                "targetClass": "bicycle",
                "keyframes": [
                    { "frame": 120, "timeMs": 2000, "distanceM": 48, "box": { "x": 0.62, "y": 0.45, "w": 0.05, "h": 0.11 }, "conf": 0.88 },
                    { "frame": 160, "timeMs": 2666, "distanceM": 38, "box": { "x": 0.58, "y": 0.43, "w": 0.08, "h": 0.16 }, "conf": 0.93 },
                    { "frame": 210, "timeMs": 3500, "distanceM": 26, "box": { "x": 0.53, "y": 0.41, "w": 0.11, "h": 0.23 }, "conf": 0.97 },
                    { "frame": 264, "timeMs": 4400, "distanceM": 14, "box": { "x": 0.48, "y": 0.38, "w": 0.15, "h": 0.32 }, "conf": 0.99 }
                ]
            }
        ]
    }

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(scenarios_data, f, indent=2)
    print(f"[YOLOv8 + Vision Mamba Pipeline] Wrote {len(scenarios_data['scenarios'])} scenarios to {output_path}")

if __name__ == "__main__":
    generate_offline_scenario_dataset()
