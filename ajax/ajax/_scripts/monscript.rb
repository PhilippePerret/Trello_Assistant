# encoding: UTF-8
# frozen_string_literal: true
=begin
	Ceci est un script d'essai pour Trello_Assistant
	Il ouvre le dossier "Documents" dans le Finder
=end

folder_documents = File.join('/Users', 'philippeperret','Documents')

`open -a Finder "#{folder_documents}"`

Ajax << {message: "J'ai ouvert le dossier “#{folder_documents}” sur le bureau"}