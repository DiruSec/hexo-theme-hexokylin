/* global hexo */
'use strict';

hexo.extend.filter.register('before_post_render', function(data) {
  if (typeof data.excerpt === 'string' && data.excerpt.trim().length > 0) {
    data.excerpt = hexo.render.renderSync({ text: data.excerpt, engine: 'markdown' });
  }
  return data;
});
