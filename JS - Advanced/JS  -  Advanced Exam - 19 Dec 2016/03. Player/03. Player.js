class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score) {
        if (!isNaN(score) && score !== null) {
            this.scores.push(+score);
            this.scores.sort((a, b) => b - a);
        }
        return this;
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        return this.scores[0];
    }

    get topFiveScore() {
        return this.scores.slice(0, 5);
    }

    toString() {
        return `${this.nickName}: [${this.scores}]`;
    }
}