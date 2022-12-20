package com.david.collegemajors.controller;

import com.david.collegemajors.entity.Major;
import com.david.collegemajors.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MajorController {

    @Autowired
    private MajorService service;


    /**
     * POST Methods
     */

    @PostMapping("/addMajor")
    public Major addMajor(@RequestBody Major major) {
        return service.saveMajor(major);
    }

    @PostMapping("/addMajors")
    public List<Major> addMajors (@RequestBody List<Major> majors) {
        return service.saveMajors(majors);
    }


    /**
     * GET Methods
     */

    @GetMapping("/majors")
    public List<Major> findAllMajors() {
        return service.getMajors();
    }

    @GetMapping("/majorById/{id}")
    @ResponseBody
    public Major findMajorById(@PathVariable int id) {
        return service.getMajorById(id);
    }

    @GetMapping("/majorByName/{name}")
    public Major findMajorByName(@PathVariable String name) {
        return service.getMajorByName(name);
    }

    @GetMapping("/majorByCategory/{category}")
    public List<Major> findMajorByCategory(@PathVariable String category) {
        return service.getMajorsByCategory(category);
    }

    /**
     * PUT Methods
     */

    @PutMapping("/update")
    public Major updateMajor(Major major) {
        return service.updateMajor(major);
    }


    /**
     * DELETE Methods
     */

    @DeleteMapping("/delete/{id}")
    public String deleteMajor(@PathVariable int id) {
        return service.deleteMajor(id);
    }
}
