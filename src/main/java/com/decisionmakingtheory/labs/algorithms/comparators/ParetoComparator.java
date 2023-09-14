package com.decisionmakingtheory.labs.algorithms.comparators;

import com.decisionmakingtheory.labs.models.Alternative;

import java.util.Comparator;

public class ParetoComparator implements Comparator<Alternative> {

    @Override
    public int compare(Alternative a1, Alternative a2) {
        if (paretoCondition(a1, a2)) {
            return 1;
        } else if (paretoCondition(a2, a1)) {
            return -1;
        }
        return 0;
    }

    private boolean paretoCondition(Alternative a1, Alternative a2) {
        return ((a1.getQ1() > a2.getQ1() && a1.getQ2() > a2.getQ2()) ||
                (a1.getQ1() > a2.getQ1() && a1.getQ2() == a2.getQ2()) ||
                (a1.getQ1() == a2.getQ1() && a1.getQ2() > a2.getQ2()));
    }
}

