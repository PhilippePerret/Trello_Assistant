# encoding: UTF-8
# frozen_string_literal: true
=begin
	Script example with params
=end

Ajax << {message: "I call the script “#{__FILE__}” with #{Ajax.with.inspect} et #{Ajax.with[:var1].inspect}"}