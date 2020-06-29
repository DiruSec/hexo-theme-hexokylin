# Hexokylin

Default theme of [Firekylin] ported into [Hexo].  

## Installation

### Install

``` bash
$ git clone https://github.com/dirusec/hexo-theme-hexokylin.git themes/hexokylin
```

**Requires Hexo 2.4 and above.** If you would like to enable the RSS, the [hexo-generate-feed] plugin is also required.

### Enable

Modify `theme` setting in `_config.yml` to `hexokylin`.

### Update

``` bash
cd themes/hexokylin
git pull
```

## Configuration

``` yml
# Header
menu:
  Home: 
    url: /
    title: Home
    icon: fa fa-home
  Archives:
    url: /archives
    title: Archive
    icon: fa fa-archive
iconmenu:
  Github:
    url: https://github.com/DiruSec
    icon: fa fa-github fa-fw
    
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
```

- **menu** - Navigation menu
- **iconmenu** - Icon-only menu under navigation.
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiter ID
- **google_plus** - Google+ ID

## Configuration (at hexo config)
``` yml
hightlight: false      //disable hexo's build-in hightlighting feature.
hightlightjs: true
```

- **hightlightjs** - Use hightlight.js for code hightlighting.
## Features

### Fancybox

Hexokylin uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

## Development

### Requirements

- [Grunt] 0.4+
- Hexo 2.4+

### Grunt tasks

- **default** - Download [Fancybox] and [Font Awesome].
- **hightlightjs** - Only Download [Highlightjs]'s CDN-release.
- **fontawesome** - Only download [Font Awesome].
- **fancybox** - Only download [Fancybox].
- **clean** - Clean temporarily files and downloaded files.

[Firekylin]: https://github.com/firekylin/firekylin
[Highlightjs]: https://github.com/highlightjs/cdn-release
[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Grunt]: http://gruntjs.com/
[hexo-generate-feed]: https://github.com/hexojs/hexo-generator-feed
