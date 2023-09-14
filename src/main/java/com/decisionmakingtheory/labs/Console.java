package com.decisionmakingtheory.labs;

import com.decisionmakingtheory.labs.models.Alternative;
import com.decisionmakingtheory.labs.models.Solution;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Console {

    private static String redColorCode = "\u001B[31m";
    private static String resetColorCode = "\u001B[0m";

    public static void printSeries(List<List<Integer>> series) {
        System.out.println();
        for(int i = 1; i < series.size(); i++) {
            System.out.println(i + ": " + series.get(i - 1));
        }
    }

    public static void printResults(Solution<List<Alternative>, List<Alternative>> paretoSolution, Solution<List<Alternative>, List<Alternative>> slaterSolution, List<Integer> series) {

        System.out.println(redColorCode + "\nSeries: ");

        int chunkSize = 20;

        for (int i = 0; i < series.size(); i += chunkSize) {
            int endIndex = Math.min(i + chunkSize, series.size());
            System.out.println(series.subList(i, endIndex));
        }

        System.out.println(resetColorCode);
        printAlternativeValuesTable(paretoSolution.table(), slaterSolution.table());

        System.out.println();
        printOptimalSolution(paretoSolution.optimalSet(), slaterSolution.optimalSet());
    }

    private static void printAlternativeValuesTable(List<Alternative> paretoSolution, List<Alternative> slaterSolution) {
        int chunkSize = 20;

        for (int i = 0; i < paretoSolution.size(); i += chunkSize) {
            int endIndex = Math.min(i + chunkSize, paretoSolution.size());
            List<Alternative> paretoChunk = paretoSolution.subList(i, endIndex);
            List<Alternative> slaterChunk = slaterSolution.subList(i, endIndex);

            System.out.println(part(paretoChunk, Alternative::getLabel));
            System.out.println(part(paretoChunk, alternative -> Integer.toString(alternative.getQ1())));
            System.out.println(part(paretoChunk, alternative -> Integer.toString(alternative.getQ2())));
            System.out.println(part(paretoChunk, alternative -> alternative.getDominated() != null ? alternative.getDominated() : " "));
            System.out.println(part(slaterChunk, alternative -> alternative.getDominated() != null ? alternative.getDominated() : " "));
            System.out.println();
        }
    }

    private static String part(List<Alternative> list, Function<Alternative, String> mapper) {
        return list.stream()
                .map(mapper)
                .collect(Collectors.joining("\t"));
    }

    private static void printOptimalSolution(List<Alternative> paretoSolution, List<Alternative> slaterSolution) {
        System.out.println("Pareto set: ");
        printOptimalSolution(paretoSolution);

        System.out.println();

        System.out.println("Slater set: ");
        printOptimalSolution(slaterSolution);
    }

    private static void printOptimalSolution(List<Alternative> list) {

        Map<String, List<Alternative>> optimalGroups = list.stream()
                .collect(Collectors.toMap(
                        alternative -> alternative.getQ1() + "" + alternative.getQ2(),
                        Collections::singletonList,
                        (list1, list2) -> {
                            List<Alternative> merged = new ArrayList<>(list1);
                            merged.addAll(list2);
                            return merged;
                        },
                        LinkedHashMap::new
                ));

        optimalGroups.forEach((key, value) -> {
            for (int i = 0; i < value.size(); i++) {
                System.out.print(value.get(i).getLabel() + "(" + key + ")");
                if(i != value.size() - 1) System.out.print(" = ");
            }

            System.out.println();
        });

    }

}

