var view = {
    init: function() {
        this.student = $('.student');
        var allCheckboxes = $('tbody input');
        allCheckboxes.on('click',function() {
            view.render();
        });
    },

    render: function() {
        this.student.each(function(index1,student) {
            var num = 0;
            var inputs = $(student).children('td').children('input');
            inputs.each(function(index2,input) {
                if($(input).prop('checked')) {
                    octopus.setStudentsDays(index1,index2,1);
                    num++;
                }
            });
            octopus.setStudentsDayMissed(index1,num);
            $(student).children('.missed-col').text(num);
        });
        console.log(model.students);
    }
};

var model = {
    students: [
        {
            name:"Slappy the Frog",
            days:[0,0,0,0,0,0,0,0,0,0,0,0],
            dayMissed:0
        },
        {
            name:"Lilly the Lizard",
            days:[0,0,0,0,0,0,0,0,0,0,0,0],
            dayMissed:0

        },
        {
            name:"Paulrus the Walrus",
            days:[0,0,0,0,0,0,0,0,0,0,0,0],
            dayMissed:0
        },
        {
            name:"Gregory the Goat",
            days:[0,0,0,0,0,0,0,0,0,0,0,0],
            dayMissed:0
        },
        {
            name:"Adam the Anaconda",
            days:[0,0,0,0,0,0,0,0,0,0,0,0],
            dayMissed:0
        }

    ]
};

var octopus = {
    init: function() {
        view.init();
    },
    setStudentsDays: function(index1,index2,dayCheck) {
        model.students[index1].days[index2] = dayCheck;
    },
    setStudentsDayMissed: function(index1,num) {
        model.students[index1].dayMissed = num;
    }
};
octopus.init();
