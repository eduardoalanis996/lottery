import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Card from 'App/Models/Card'

export default class extends BaseSeeder {
  public async run() {
    await Card.createMany([
      { name: 'el_alacran', fileName: 'el_alacran.jpg' },
      { name: 'el_arpa', fileName: 'el_arpa.jpg' },
      { name: 'el_bandolon', fileName: 'el_bandolon.jpg' },
      { name: 'el_borracho', fileName: 'el_borracho.jpg' },
      { name: 'el_camaron', fileName: 'el_camaron.jpg' },
      { name: 'el_cantarito', fileName: 'el_cantarito.jpg' },
      { name: 'el_cazo', fileName: 'el_cazo.jpg' },
      { name: 'el_cotorro', fileName: 'el_cotorro.jpg' },
      { name: 'el_mundo', fileName: 'el_mundo.jpg' },
      { name: 'el_nopal', fileName: 'el_nopal.jpg' },
      { name: 'el_nregrito', fileName: 'el_nregrito.jpg' },
      { name: 'el_pescado', fileName: 'el_pescado.jpg' },
      { name: 'el_pino', fileName: 'el_pino.jpg' },
      { name: 'el_sol', fileName: 'el_sol.jpg' },
      { name: 'el_soldado', fileName: 'el_soldado.jpg' },
      { name: 'el_tambor', fileName: 'el_tambor.jpg' },
      { name: 'el_venado', fileName: 'el_venado.jpg' },
      { name: 'el_violoncello', fileName: 'el_violoncello.jpg' },
      { name: 'la_arana', fileName: 'la_arana.jpg' },
      { name: 'la_bandera', fileName: 'la_bandera.jpg' },
      { name: 'la_bota', fileName: 'la_bota.jpg' },
      { name: 'la_campana', fileName: 'la_campana.jpg' },
      { name: 'la_chalupa', fileName: 'la_chalupa.jpg' },
      { name: 'la_corona', fileName: 'la_corona.jpg' },
      { name: 'la_garza', fileName: 'la_garza.jpg' },
      { name: 'la_luna', fileName: 'la_luna.jpg' },
      { name: 'la_maceta', fileName: 'la_maceta.jpg' },
      { name: 'la_mano', fileName: 'la_mano.jpg' },
      { name: 'la_muerte', fileName: 'la_muerte.jpg' },
      { name: 'la_palma', fileName: 'la_palma.jpg' },
      { name: 'la_pera', fileName: 'la_pera.jpg' },
      { name: 'la_rana', fileName: 'la_rana.jpg' },
      { name: 'la_rosa', fileName: 'la_rosa.jpg' },
      { name: 'la_sandia', fileName: 'la_sandia.jpg' },
    ])
  }
}
