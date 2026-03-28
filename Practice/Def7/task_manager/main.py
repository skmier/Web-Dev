from models import Task, TaskManager
from storage import save_tasks, load_tasks
DATA_FILE = "Practice/Def7/task_manager/data.json"


def show_menu():
    print("=== Task Manager ===\n1. Show tasks \n2. Add task \n3. Complete task \n4. Delete task \n5. Exit")


def main():
    tasks = load_tasks(DATA_FILE)
    manager = TaskManager(tasks)

    while True:
        show_menu()
        try:
            oper = int(input("Choose an option: "))
        except ValueError:
            print("[ERROR] Enter integer")
            continue
        if oper == 1:
            manager.list_tasks()
        elif oper == 2:
            title = input("Enter task title: ")
            if title.strip():
                manager.add_task(title)
                save_tasks(DATA_FILE, manager.tasks)
            else:
                print("Title cannot be empty")
        elif oper == 3:
            try:
                task_id = int(input("Enter task ID to complete: "))
                if manager.complete_task(task_id):
                    save_tasks(DATA_FILE, manager.tasks)
                else:
                    print("Task not found")
            except ValueError:
                print("[ERROR] Enter integer")
        elif oper == 4:
            try:
                task_id = int(input("Enter task ID to delete: "))
                if manager.delete_task(task_id):
                    save_tasks(DATA_FILE, manager.tasks)
                else:
                    print("Task not found")
            except ValueError:
                print("[ERROR] Enter integer")
        elif oper == 5:
            print("Goodbye!")
            break
        else:
            print("Try again")



if __name__ == "__main__":
    main()