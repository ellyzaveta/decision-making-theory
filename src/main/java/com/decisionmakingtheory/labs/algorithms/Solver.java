package com.decisionmakingtheory.labs.algorithms;

import com.decisionmakingtheory.labs.models.Alternative;
import com.decisionmakingtheory.labs.models.Solution;
import com.decisionmakingtheory.labs.utils.ListConverter;

import java.util.Comparator;
import java.util.List;

public class Solver {

    private final List<Alternative> alternatives;
    private final Comparator<Alternative> comparator;

    public Solver(List<Integer> inputList, Comparator<Alternative> comparator) {
        this.alternatives = ListConverter.getListOfAlternatives(inputList);
        this.comparator = comparator;
    }

    public Solution<List<Alternative>, List<Alternative>> getSolution() {
        algorithm();
        return new Solution<>(getAlternatives(), getOptimalSolutions());
    }

    private void algorithm() {
        for (int i = 0; i < alternatives.size(); i++) {
            for (int j = 0; j < alternatives.size(); j++) {
                if (j <= i) {
                    continue;
                }
                if (!compare(alternatives.get(i), alternatives.get(j))) {
                    break;
                }
            }
        }
    }

    private boolean compare(Alternative a1, Alternative a2) {
        int compareResult = comparator.compare(a1, a2);
        if (compareResult > 0) {
            a2.setDominated(a1.getLabel());
            return true;
        } else if (compareResult < 0) {
            a1.setDominated(a2.getLabel());
            return false;
        }
        return true;
    }

    private List<Alternative> getAlternatives() {
        return alternatives;
    }

    private List<Alternative> getOptimalSolutions() {
        return alternatives.stream()
                .filter(Alternative::isDominated).toList();
    }

}
