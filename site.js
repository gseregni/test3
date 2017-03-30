 $(document).ready(function() {
                        twttr.widgets.load();
                
                        var tweets = ["603209060117282816",
                                      "605221652863942656",
                                      "634471435881152512",
                                      "634855664871870464",
                                      "635320464470970368",
                                      "635927592780959745",
                                      "639088400717492224",
                                      "651480544652333056",
                                      "652782572402044930",
                                      "663089293901082624",
                                      "667717781677342720",
                                      "670840491504566274",
                                      "671706927525699584",
                                      "696041778407936000",
                                      "702236436444094464",
                                      "702942254197936129",
                                      //"711919235832942593",
                                      "716006503094861825", 
                                      "718111345124749313"];
                
                        $(tweets).each(function() {
                          var $clone = $("#tweet").clone();
                          $("#tweet").before($clone);
                
                          twttr.widgets.createTweet(this,$clone[0],{conversation:"none", cards : "hidden"});
                
                        });
                
                        var isChrome = /Chrome/.test(navigator.userAgent) ;
                        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                        console.log("IS CHROM ", isChrome); 
                        if (isChrome) {
                
                          $("#playgroundBtn").html("Try now in Chrome");
                        }
                        else if (isSafari)
                          $("#playgroundBtn").html("Try now in Safari");
                
                
                      });