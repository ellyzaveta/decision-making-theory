package com.decisionmakingtheory.labs.algorithms;

import com.decisionmakingtheory.labs.algorithms.comparators.SlaterComparator;

import java.util.List;

public class SlaterAlgorithm extends Solver {
    public SlaterAlgorithm(List<Integer> series) {
        super (series, new SlaterComparator());
    }
}
