!function documentReady( callback ){

	var windowAnalyzer = window.setInterval( function(){
		if( document.readyState === 'complete' ){
			callback();
			clearInterval( windowAnalyzer );
		}
	} , 0 );

}( 
	function(){
		console.log( 'carregado' );
	} 
);