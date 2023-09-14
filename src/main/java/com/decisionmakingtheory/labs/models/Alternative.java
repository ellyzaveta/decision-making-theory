package com.decisionmakingtheory.labs.models;

public class Alternative {
    private int q1;
    private int q2;
    private String dominated;
    private String label;

    public Alternative(int q1, int q2, String label) {
        this.q1 = q1;
        this.q2 = q2;
        this.dominated = null;
        this.label = label;
    }

    public int getQ1() {
        return q1;
    }

    public void setQ1(int q1) {
        this.q1 = q1;
    }

    public int getQ2() {
        return q2;
    }

    public void setQ2(int q2) {
        this.q2 = q2;
    }

    public String getDominated() {
        return dominated;
    }

    public void setDominated(String dominated) {
        if (this.dominated == null) {
            this.dominated = dominated;
        }
    }

    @Override
    public String toString() {
        return label + "(" + q1 + q2 + ")";
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public boolean isDominated() {
        return dominated == null;
    }
}

