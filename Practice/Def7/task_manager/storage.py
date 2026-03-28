import json
import os
from models import Task, TaskManager


def load_tasks(filename: str) -> list:
    if not os.path.exists(filename):
        return []

    try:
        with open(filename, "r", encoding="utf-8") as f:
            data = json.load(f)
            return [Task.from_dict(item) for item in data]
    except (json.JSONDecodeError):
        return []


def save_tasks(filename: str, tasks: list):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump([task.to_dict() for task in tasks], f, indent=4)