package com.doxan.moodlet;

import org.springframework.boot.SpringApplication;

public class TestMoodletApplication {

    public static void main(String[] args) {
        SpringApplication.from(MoodletApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
