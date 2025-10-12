source "https://rubygems.org"

ruby ">=3.0.0"

# Jekyll and core plugins
gem "jekyll", "~> 4.3.0"
gem "minima", "~> 2.5"
gem "webrick", "~> 1.8"

# Jekyll plugins
gem "jekyll-feed", "~> 0.12"
gem "jekyll-sitemap"
gem "jekyll-seo-tag"

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
