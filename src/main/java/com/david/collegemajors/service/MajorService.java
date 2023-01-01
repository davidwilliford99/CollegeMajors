package com.david.collegemajors.service;

import com.david.collegemajors.entity.Major;
import com.david.collegemajors.entity.comparators.*;
import com.david.collegemajors.repository.MajorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * Service Class for Major
 */

@Service
public class MajorService {

    @Autowired
    private MajorRepository repository;

    /**
     * Finds by id
     *
     * @param id
     * @return
     */
    public Major getMajorById(@PathVariable int id) {
        return repository.findById(id).orElse(null);
    }

    /**
     * Finds major by name
     * findByName(name) is defined in repository class
     *
     * @param name
     * @return
     */
    public Major getMajorByName(@PathVariable String name) {
        return repository.findByName(name);
    }

    /**
     * Saves a single Major
     *
     * @param major
     * @return
     */
    public Major saveMajor(Major major) {
        return repository.save(major);
    }

    /**
     * Saves a list of Majors
     *
     * @param majors
     * @return
     */
    public List<Major> saveMajors(List<Major> majors) {
        return repository.saveAll(majors);
    }

    /**
     * Returns all majors in database
     *
     * @return
     */
    public List<Major> getMajors() {
        return repository.findAll();
    }

    /**
     * Deletes an existing major by Id
     *
     * @param id
     * @return
     */
    public String deleteMajor(int id) {
        repository.deleteById(id);
        return "Major removed" + id;
    }

    /**
     * Updates existing major
     *
     * @param updated
     * @return
     */
    public Major updateMajor(Major updated) {
        Major existing = repository.findById(updated.getId()).orElse(null);

        existing.setName(updated.getName());
        existing.setCategory(updated.getCategory());
        existing.setTotal(updated.getTotal());
        existing.setEmployed(updated.getEmployed());
        existing.setUnemployed(updated.getUnemployed());
        existing.setEmployedFullTime(updated.getEmployedFullTime());
        existing.setUnemploymentRate(updated.getUnemploymentRate());
        existing.setMedianSalary(updated.getMedianSalary());
        existing.setP25Salary(updated.getP25Salary());
        existing.setP75Salary(updated.getP75Salary());

        return repository.save(existing);
    }

    /**
     * Returns a List of majors by category
     *
     * @param category
     * @return
     */
    public List<Major> getMajorsByCategory(@PathVariable String category) {
        return repository.findByCategory(category);
    }

    /**
     * Returns top 10 paying majors
     *
     * @return
     */
    public List<Major> getTop10PayingMajors() {
        List<Major> majors = repository.findAll();
        Collections.sort(majors, new MedianSalaryComparator());

        List<Major> top10 = new ArrayList<Major>();
        for(int i = 0; i < 10; i++) {
            top10.add(majors.get(i));
        }
        return top10;
    }

    /**
     * Returns top 10 most popular majors
     *
     * @return
     */
    public List<Major> getTop10PopularMajors() {
        List<Major> majors = repository.findAll();
        Collections.sort(majors, new TotalComparator());

        List<Major> top10 = new ArrayList<Major>();
        for(int i = 0; i < 10; i++) {
            top10.add(majors.get(i));
        }
        return top10;
    }

    /**
     * Returns majors in alphabetical order
     *
     * @return
     */
    public List<Major> getMajorsByName() {
        List<Major> majors = repository.findAll();
        Collections.sort(majors, new NameComparator());

        List<Major> list = new ArrayList<Major>();
        for(int i = 0; i < majors.size(); i++) {
            list.add(majors.get(i));
        }
        return list;
    }

    /**
     * Returns majors in order of popularity
     *
     * @return
     */
    public List<Major> getMajorsByPopularity() {
        List<Major> majors = repository.findAll();
        Collections.sort(majors, new TotalComparator());

        List<Major> list = new ArrayList<Major>();
        for(int i = 0; i < majors.size(); i++) {
            list.add(majors.get(i));
        }
        return list;
    }

    /**
     * Returns majors in order of unemployment (inc)
     *
     * @return
     */
    public List<Major> getMajorsByUnemploymentInc() {
        List<Major> majors = repository.findAll();
        Collections.sort(majors, new UnemploymentIncComparator());

        List<Major> list = new ArrayList<Major>();
        for(int i = 0; i < majors.size(); i++) {
            list.add(majors.get(i));
        }
        return list;
    }

    /**
     * Returns majors in order of unemployment (dec)
     *
     * @return
     */
    public List<Major> getMajorsByUnemploymentDec() {
        List<Major> majors = repository.findAll();
        Collections.sort(majors, new UnemploymentDecComparator());

        List<Major> list = new ArrayList<Major>();
        for(int i = 0; i < majors.size(); i++) {
            list.add(majors.get(i));
        }
        return list;
    }

    /**
     * Returns majors in order of total employed people
     *
     * @return
     */
    public List<Major> getMajorsByEmployment() {
        List<Major> majors = repository.findAll();
        Collections.sort(majors, new UnemploymentDecComparator());

        List<Major> list = new ArrayList<Major>();
        for(int i = 0; i < majors.size(); i++) {
            list.add(majors.get(i));
        }
        return list;
    }

}
