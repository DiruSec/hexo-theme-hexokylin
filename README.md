# Hexokylin

Theme of [Firekylin]. Now avaliable on [Hexo].  
Based on Landscape.

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
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archives
- recent_posts

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiter ID
- **google_plus** - Google+ ID

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
- **fontawesome** - Only download [Font Awesome].
- **fancybox** - Only download [Fancybox].
- **clean** - Clean temporarily files and downloaded files.

[Firekylin]: https://github.com/firekylin/firekylin
[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Grunt]: http://gruntjs.com/
[hexo-generate-feed]: https://github.com/hexojs/hexo-generator-feed
