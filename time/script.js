

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');




        for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

            if((typeof(a) ==='string') && (typeof(a) != null ) && (typeof(b) != null) && a !='' && b !='' && a.length < 50){
                appData.expenses[a] = b;
            } else{
                i--;
            }

            
        };


appData.oneDay = appData.budget/30;


alert('ваш бюжет на день : ' + appData.oneDay);
