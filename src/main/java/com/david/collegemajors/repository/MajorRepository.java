package com.david.collegemajors.repository;

import com.david.collegemajors.entity.Major;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Extends JpaRepository <Object type, primary key type>
 */
public interface MajorRepository extends JpaRepository<Major, Integer> {
    Major findByName(String name);
}
