class Door extends Range {
    constructor(dock, range, racks, number, stage, serviceable, s_comments) {
        super(dock, range, racks)
        this.number = number
        this.stage = stage
        this.serviceable = serviceable
        this.s_comments = s_comments
    }
}