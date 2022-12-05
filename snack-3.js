/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchine = [
    {
        varieta : 'romana',
        peso : 20,
        lunghezza: 15,

    },
        
    
    {
        varieta : 'napoletana',
        peso : 20,
        lunghezza: 15,
        
    },

    {
        varieta : 'abruzzese',
        peso : 17,
        lunghezza: 15,
         
    },

    {
        varieta : 'pugliese',
        peso : 26,
        lunghezza: 15,
        
    },

    {
        varieta : 'palermitana',
        peso : 23,
        lunghezza: 15,
        
    },

    {
        varieta : 'veneta',
        peso : 23,
        lunghezza: 15,
        
    },

    {
        varieta : 'bolognese',
        peso : 30,
        lunghezza: 15,
       
    },

    {
        varieta : 'ligura',
        peso : 25,
        lunghezza: 15,
        
    },

    {
        varieta : 'milanese',
        peso : 22,
        lunghezza:  15,
        
    },

    {
        varieta : 'piemontese',
        peso : 17,
        lunghezza: 15,
        
    },


]   

let pesoTotale = 0

for(let i = 0; i < zucchine.length; i++){
    pesoTotale = pesoTotale + zucchine[i].peso;

}
console.log(pesoTotale)

