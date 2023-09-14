package com.decisionmakingtheory.labs.lab1.algorithms;

import com.decisionmakingtheory.labs.lab1.algorithms.comparators.ParetoComparator;

import java.util.List;

public class ParetoAlgorithm extends Solver {
    public ParetoAlgorithm(List<Integer> series) {
        super (series, new ParetoComparator());
    }
}
