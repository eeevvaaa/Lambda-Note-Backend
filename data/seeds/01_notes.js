exports.seed = function(knex, Promise) {
	return knex('table_name')
		.truncate()
		.then(function() {
			return knex('table_name').insert([
				{
					title: 'Lorem ipsum',
					content:
						'Lorem ipsum dolor sit amet, in pri justo appareat incorrupte, sit repudiare splendide in. Posse quodsi mel at. Duo detracto rationibus ex, te duo habeo iusto salutatus, eam ne nibh iuvaret. Te has justo aperiam dissentias, an lorem rationibus omittantur duo. Ne munere graeci usu.'
				},
				{
					title: 'Lorem ipsum',
					content:
						'Lorem ipsum dolor sit amet, in pri justo appareat incorrupte, sit repudiare splendide in. Posse quodsi mel at. Duo detracto rationibus ex, te duo habeo iusto salutatus, eam ne nibh iuvaret. Te has justo aperiam dissentias, an lorem rationibus omittantur duo. Ne munere graeci usu.'
				},
				{
					title: 'Lorem ipsum',
					content:
						'Lorem ipsum dolor sit amet, in pri justo appareat incorrupte, sit repudiare splendide in. Posse quodsi mel at. Duo detracto rationibus ex, te duo habeo iusto salutatus, eam ne nibh iuvaret. Te has justo aperiam dissentias, an lorem rationibus omittantur duo. Ne munere graeci usu.'
				}
			]);
		});
};
