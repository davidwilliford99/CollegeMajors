package com.david.collegemajors.controller;

import com.david.collegemajors.entity.Major;
import com.david.collegemajors.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Also consider adding the @RequestMapping("/api/v1/majors") to this class
 * This will prevent duplicated links and add more detail to the API endpoints
 */

@RestController
@CrossOrigin
@RequestMapping
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
    @GetMapping("/top10PayingMajors")
    public List<Major> findTop10PayingMajors() {
        return service.getTop10PayingMajors();
    }
    @GetMapping("/top10PopularMajors")
    public List<Major> findTop10PopularMajors() {
        return service.getTop10PopularMajors();
    }

    @GetMapping("/majorsByUnemploymentInc")
    public List<Major> findMajorsByUnemploymentInc() {
        return service.getMajorsByUnemploymentInc();
    }
    @GetMapping("/majorsByUnemploymentDec")
    public List<Major> findMajorsByUnemploymentDec() {
        return service.getMajorsByUnemploymentDec();
    }
    @GetMapping("/majorsByTotal")
    public List<Major> findMajorsByTotal() {
        return service.getMajorsByPopularity();
    }
    @GetMapping("/majorsByName")
    public List<Major> findMajorsByName() {
        return service.getMajorsByName();
    }
    @GetMapping("/majorsByEmployed")
    public List<Major> findMajorsByEmployed() {
        return service.getMajorsByEmployment();
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
