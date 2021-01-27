var Mockjs = require('mockjs')

module.exports = function mockjsPlugin(md) {

    function scan(state) {
        var i, blkIdx, inlineTokens;
    
        for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
          if (state.tokens[blkIdx].type !== 'fence' && state.tokens[blkIdx].type !== 'inline' ) {
            continue;
          }
          if(state.tokens[blkIdx].type === 'fence' && state.tokens[blkIdx].tag==='code' && state.tokens[blkIdx].info==='mockjs'){
  
            state.tokens[blkIdx].content = JSON.stringify(Mockjs.mock(JSON.parse(state.tokens[blkIdx].content)));
            // state.tokens[blkIdx]=token
          }
          if(state.tokens[blkIdx].type === 'inline'){
            inlineTokens = state.tokens[blkIdx].children;
            for (i = inlineTokens.length - 1; i >= 0; i--) {
                if (inlineTokens[i].type !== 'code_inline') {
                continue;
                }
                if(/^@/.test(inlineTokens[i].content)){
                  inlineTokens[i].content = Mockjs.mock(inlineTokens[i].content);
                }
                
            }
          }
          
        }
      }

    md.core.ruler.push('mock', scan,['code','inline']);
}