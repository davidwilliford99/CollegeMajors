package com.david.collegemajors.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "majors")
public class Major {

    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String category;
    private Integer total;
    private String employed;
    private String unemployed;
    private String employedFullTime;
    private String unemploymentRate;
    private Integer medianSalary;
    private String p25Salary;
    private String p75Salary;
}
