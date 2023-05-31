PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

1- inserire una variabile che conterrà un array vuoto
2- inserire un ciclo for che inserira nell' array 5 numeri random tramite l'ausilio di Mathrandom e Mathfloor e tramite la proprieta push inserisco i valori nell'array vuoto
3- inserire un setTimeout di 5 secondi che fara scomparire l' array di numeri random
4- inserire un ulteriore setTimeout di una durata di 6 secondi dove al suo interno:
    4.1- inserire una variabile che conterrà un array vuoto
    4.2- inserire un ciclo for che inserira nell' array 5 comandi promt dove l'utente inserira cinque numeri e tramite la proprieta push inserisco i valori nell'array vuoto
5- inserire una condizione:
    SE- i numeri inseriti nel prompt dall'utente sono inclusi anche nell'array dei numeri random allora verranno immessi nell'DOM sottoforma di numero/i indovinato/i
    ALTRIMENTI- se i numeri inseriti nel prompt dall'utente sono esclusi dall'array dei numeri random comparira un messaggio che indicherà all'utente di non aver indovinato nemmeno un numero.
6-FINE