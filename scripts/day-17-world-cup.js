
// retrieve list of todays matches
gladys.utils.request('http://worldcup.sfg.io/matches/today')
    .then((todayMatches) => {
        
        // if there is at least one match
        if(todayMatches.length > 0) {
            
            // build the string list of match
            var matchString = '';
            todayMatches.forEach((match, index) => {
                if(index > 0) matchString += ', ';
                matchString += `${match.home_team.country} vs ${match.away_team.country}`;
            });
            
            var text;
            
            if(todayMatches.length === 1)
                text = `Sir, there is ${todayMatches.length} match today: ${matchString}`;
            else
                text = `Sir, there are ${todayMatches.length} matches today: ${matchString}`;
            
            sails.log.info(text);
            
            return gladys.notification.create({
                title: 'World Cup 2018',
                text: text,
                icon: 'fa fa-futbol-o',
                iconColor: 'blue',
                user: 1
            });
        }
    });