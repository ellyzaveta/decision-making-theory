package com.decisionmakingtheory.labs.algorithms;

import com.decisionmakingtheory.labs.algorithms.comparators.ParetoComparator;

import java.util.List;

public class ParetoAlgorithm extends Solver {
    public ParetoAlgorithm(List<Integer> series) {
        super (series, new ParetoComparator());
    }
}
