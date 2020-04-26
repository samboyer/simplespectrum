/*
SimpleSpectrumWeb.jslib - Part of Simple Spectrum V2.1 by Sam Boyer.
*/

mergeInto(LibraryManager.library, {

  var simpleSpectrumError = 'Error: This webpage is missing the supplementary Javascript for SimpleSpectrum to work. Check the documentation!'

  SimpleSpectrumGetData : function(arrayPtr){
  	if(window.SimpleSpectrum === undefined){
		alert(simpleSpectrumError);
		return;
	}
	
	var arr = window.SimpleSpectrum.fa; //get the frequency array
	
    window.SimpleSpectrum.a.getByteFrequencyData(arr);	
	
	HEAPU8.set(arr, arrayPtr); //put this data into the right place in the heap
  },
   
  SimpleSpectrumGetLoudness : function(arrayPtr){
	if(window.SimpleSpectrum === undefined){
		alert(simpleSpectrumError);
		return;
	}
	
	var arr = window.SimpleSpectrum.la; //get the loudness array
	
	window.SimpleSpectrum.a.getByteTimeDomainData(arr);
	
	HEAPU8.set(arr, arrayPtr); //put this data into the right place in the heap
  },

  SimpleSpectrumSetFFTSize : function(size){
	if(window.SimpleSpectrum === undefined){
		alert(simpleSpectrumError);
		return;
	}
	window.SimpleSpectrum.a.fftSize = size * 2; //cause it corresponds to twice the array size...?
	window.SimpleSpectrum.fa = new Uint8Array(window.SimpleSpectrum.a.frequencyBinCount);
   	window.SimpleSpectrum.la = new Uint8Array(window.SimpleSpectrum.a.fftSize);
  },
});