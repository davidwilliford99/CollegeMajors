package com.david.collegemajors.entity.comparators;

import com.david.collegemajors.entity.Major;

import java.util.Comparator;

public class NameComparator implements Comparator<Major> {
    @Override
    public int compare(Major m1, Major m2) {
        return m1.getName().compareTo(m2.getName());
    }
}

