package com.decisionmakingtheory.labs.utils;

import com.decisionmakingtheory.labs.models.Alternative;

import java.util.ArrayList;
import java.util.List;

public class ListConverter {

    public static List<Alternative> getListOfAlternatives(List<Integer> list) {
        List<Alternative> alternatives = new ArrayList<>();

        int currentLabel = 1;

        for (Integer num : list) {
            String number = String.valueOf(num);

            if (isSingleDigitNumber(number)) {
                number = "0" + number;
            }

            String firstDigit = number.substring(0, 1);
            String secondDigit = number.substring(1);

            Alternative alternative = new Alternative(Integer.parseInt(firstDigit), Integer.parseInt(secondDigit), "A" + currentLabel);
            alternatives.add(alternative);

            currentLabel++;
        }

        return alternatives;
    }

    public static List<Integer> getListOfIntegers(String str) {

        List<Integer> integerList = new ArrayList<>();

        String[] splitValues = str.split(", ");

        for (String value : splitValues) {
            try {
                Integer intValue = Integer.parseInt(value);
                integerList.add(intValue);
            } catch (NumberFormatException e) {
                System.err.println("Invalid integer value: " + value);
            }
        }

        return integerList;
    }

    private static boolean isSingleDigitNumber(String number) {
        return number.length() == 1;
    }
}
