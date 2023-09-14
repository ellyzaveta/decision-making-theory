package com.decisionmakingtheory.labs.lab1.algorithms;

import com.decisionmakingtheory.labs.lab1.algorithms.comparators.SlaterComparator;

import java.util.List;

public class SlaterAlgorithm extends Solver {
    public SlaterAlgorithm(List<Integer> series) {
        super (series, new SlaterComparator());
    }
}
