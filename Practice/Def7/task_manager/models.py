class Task:
    def __init__(self,task_id : int, title : str, completed: bool = False):
        self.task_id = task_id
        self.title = title
        self.completed = completed
    

    def mark_completed(self) -> None:
        self.completed = True

    
    def __str__(self) -> str:
        if self.completed :
            return f"[{self.task_id}] {self.title} ✅"
        else:
            return f"[{self.task_id}] {self.title} ❌"


    def to_dict(self) -> dict:
        return {"id": self.task_id, "title" : self.title, "completed" : self.completed}

    @classmethod
    def from_dict(cls, data: dict):
        return cls(
            task_id = data["id"],
            title = data["title"],
            completed = data.get("completed", False)
        )



class TaskManager:
    def __init__(self, tasks = None):
        self.tasks = tasks if tasks is not None else []
    
    
    def _get_next_id(self) -> int:
        if self.tasks:
            return max(task.task_id for task in self.tasks) + 1
        return 1
    
    def add_task(self, title: str):
        tit_id = self._get_next_id()
        task_title = title
        task = Task(tit_id,task_title)
        self.tasks.append(task)
        print("Task added: ", task)

    def list_tasks(self):
        if not self.tasks:
            print("Task list is empty\n")
            return

        for task in self.tasks:
            print(task)
    
    def complete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task.task_id == task_id:
                task.mark_completed()
                print("Task completed!\n")
                return True
        return False
                

    def delete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task.task_id == task_id:
                self.tasks.remove(task)
                print("Task deleted!")
                return True
        return False
    
