package com.david.collegemajors.repository;

import com.david.collegemajors.entity.Major;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Extends JpaRepository <Object type, primary key type>
 */
public interface MajorRepository extends JpaRepository<Major, Integer> {
    Major findByName(String name);
    List<Major> findByCategory(String category);

    Page<Major> findAll(Pageable pageable);

}
