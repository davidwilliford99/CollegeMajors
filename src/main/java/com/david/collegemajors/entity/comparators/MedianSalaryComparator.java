package com.david.collegemajors.entity.comparators;

import com.david.collegemajors.entity.Major;

import java.util.Comparator;

public class MedianSalaryComparator implements Comparator<Major> {

    @Override
    public int compare(Major m1, Major m2) {
        return m2.getMedianSalary() - m1.getMedianSalary();
    }
}

