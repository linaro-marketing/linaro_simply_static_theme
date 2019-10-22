# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "linaro_simply_static_theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Kyle Kirkby"]
  spec.email         = ["kyle.kirkby@linaro.org"]

  spec.summary       = "A lightweight Jekyll 4 theme using the Foundation CSS framework."
  spec.homepage      = "https://github.com/linaro-marketing/linaro_simply_static_theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README|robots|_config)((\.(txt|md|markdown|yml)|$)))}i)
  end

  # Jekyll 4 !
  spec.add_runtime_dependency "jekyll", "~> 4.0.0"
  # Add's an RSS feed for your posts
  spec.add_runtime_dependency "jekyll-feed"
  # Jekyll cached include plugin
  spec.add_runtime_dependency 'jekyll-include-cache'
  # Jekyll Tidy - HTML minfier
  spec.add_runtime_dependency 'jekyll-tidy'
  # Repsonsive Image Plugin - converts/compresses images with webp support
  spec.add_runtime_dependency "jekyll_picture_tag"
  # Blog/Collection pagination
  spec.add_runtime_dependency 'jekyll-paginate-v2', '>0'
  # JS Bundler / Compression
  spec.add_runtime_dependency 'japr'
  # Jekyll Accelerated mobile pages support.
  spec.add_runtime_dependency 'jekyll_amp', '1.0.4'
  # Gem bundler
  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
