# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "linaro_simply_static_theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Kyle Kirkby"]
  spec.email         = ["kyle.kirkby@linaro.org"]

  spec.summary       = "A lightweight Jekyll 4 theme using the Foundation CSS framework."
  spec.homepage      = "https://github.com/linaro-marketing/linaro_simply_static_theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0.0"
  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency 'jekyll-include-cache'
  spec.add_runtime_dependency "jekyll-4-picture-tag", "~> 1.0.1"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.2"
  spec.add_runtime_dependency 'jekyll-paginate-v2', '>0'

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
