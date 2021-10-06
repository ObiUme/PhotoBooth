class Schedule < ApplicationRecord
    belongs_to :photographer, class_name: 'User'
    belongs_to :client, class_name: 'User'
end
