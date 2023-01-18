package com.david.collegemajors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Welcome to the MajorStatistics API!
 *
 *
 * -----------------------------------------------------------------
 *
 * For the default username ande password for the dev environment:
 *
 * username = user
 * pw = {whatever the console gives you}
 * To logout of API, go localhost:8080/logout
 *
 *
 *------------------------------------------------------------------
 *
 *
 */

@SpringBootApplication
public class CollegeMajorsApplication {

    public static void main(String[] args) {
        SpringApplication.run(CollegeMajorsApplication.class, args);
    }

}
