package com.decisionmakingtheory.labs.lab1.controllers;

import com.decisionmakingtheory.labs.lab1.algorithms.ParetoAlgorithm;
import com.decisionmakingtheory.labs.lab1.algorithms.SlaterAlgorithm;
import com.decisionmakingtheory.labs.lab1.models.Alternative;
import com.decisionmakingtheory.labs.lab1.models.Solution;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/dmt/lab1/")
public class Controller {

    private final List<Solution<List<Alternative>, List<Alternative>>> paretoSolutions = new ArrayList<>();
    private final List<Solution<List<Alternative>, List<Alternative>>> slaterSolutions = new ArrayList<>();

    private final List<Integer> row1 = List.of(39, 63, 35, 4, 73, 6, 64, 23, 51, 49, 51, 30, 39, 4, 65, 86, 2, 25, 79, 91);
    private final List<Integer> row2 = List.of(47, 7, 84, 31, 61, 19, 31, 53, 28, 27, 94, 19, 43, 81, 23, 68, 87, 39, 43, 38);
    private final List<Integer> row3 = List.of(88, 94, 20, 80, 98, 86, 18, 52, 63, 98, 95, 10, 5, 79, 42, 66, 98, 25, 72, 78);

    List<List<Integer>> rows = List.of(
            row1,
            row2,
            row3,
            Stream.of(row1, row2, row3)
                    .flatMap(Collection::stream)
                    .collect(Collectors.toList())
    );

    public Controller() {
        calculate();
    }

    private void calculate() {
        for (List<Integer> value : rows) {
            addToResult(value);
        }
    }

    private void addToResult(List<Integer> series) {
        Solution<List<Alternative>, List<Alternative>> paretoSolution = new ParetoAlgorithm(series).getSolution();
        Solution<List<Alternative>, List<Alternative>> slaterSolution = new SlaterAlgorithm(series).getSolution();
        paretoSolutions.add(paretoSolution);
        slaterSolutions.add(slaterSolution);
    }

    @GetMapping("/paretoSolutions")
    public List<Solution<List<Alternative>, List<Alternative>>> getParetoSolutions() {
        return paretoSolutions;
    }

    @GetMapping("/slaterSolutions")
    public List<Solution<List<Alternative>, List<Alternative>>> getSlaterSolutions() {
        return slaterSolutions;
    }
}
