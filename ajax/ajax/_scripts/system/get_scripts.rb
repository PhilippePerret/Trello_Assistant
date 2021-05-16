# encoding: UTF-8
# frozen_string_literal: true
=begin
	Remonte la liste des scripts
=end

SCRIPT_FOLDER = File.dirname(__dir__)

Ajax << {scripts: Dir["#{SCRIPT_FOLDER}/*.rb"].collect{|p|File.basename(p,File.extname(p))}}