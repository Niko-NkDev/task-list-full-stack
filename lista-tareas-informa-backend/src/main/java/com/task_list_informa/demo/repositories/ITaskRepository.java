package com.task_list_informa.demo.repositories;

import com.task_list_informa.demo.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITaskRepository extends JpaRepository<Task, Long> {

}
